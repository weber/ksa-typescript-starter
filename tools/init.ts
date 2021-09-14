/**
 * This script runs automatically after your first npm-install.
 */
const _prompt = require("prompt")
const { mv, rm, which, exec } = require("shelljs")
const replace = require("replace-in-file")
const colors = require("colors")
const path = require("path")
const { readFileSync, writeFileSync } = require("fs")
const { fork } = require("child_process")

// Note: These should all be relative to the project root directory
const rmDirs = [
  ".git"
]
const rmFiles = [
  ".gitattributes",
  "tools/init.ts",
  "tools"
]
const modifyFiles = [
  "package.json"
]

const _promptSchemaLibraryName = {
  properties: {
    library: {
      description: colors.cyan(
        "Как вы хотите называть библиотеку? (используйте kebab-case)"
      ),
      pattern: /^[a-z]+(\-[a-z]+)*$/,
      type: "string",
      required: true,
      message:
        '"kebab-case" использует строчные буквы и дефисы для любых знаков препинания'
    }
  }
}

const _promptSchemaLibrarySuggest = {
  properties: {
    useSuggestedName: {
      description: colors.cyan(
        'Вы бы хотели, чтобы это называлось "' +
          libraryNameSuggested() +
          '"? [Yes/No]'
      ),
      pattern: /^(y(es)?|n(o)?)$/i,
      type: "string",
      required: true,
      message: 'Вам нужно ввести "Yes" или "No", чтобы продолжить....'
    }
  }
}

_prompt.start()
_prompt.message = ""

// Clear console
process.stdout.write('\x1B[2J\x1B[0f');

if (!which("git")) {
  console.log(colors.red("Извините, для этого скрипта требуется git"))
  removeItems()
  process.exit(1)
}

// Say hi!
console.log(
  colors.cyan("Привет! Вы почти готовы к созданию следующей замечательной библиотеки TypeScript.")
)

// Generate the library name and start the tasks
if (process.env.CI == null) {
  if (!libraryNameSuggestedIsDefault()) {
    libraryNameSuggestedAccept()
  } else {
    libraryNameCreate()
  }
} else {
  // This is being run in a CI environment, so don't ask any questions
  setupLibrary(libraryNameSuggested())
}



/**
 * Asks the user for the name of the library if it has been cloned into the
 * default directory, or if they want a different name to the one suggested
 */
function libraryNameCreate() {
  _prompt.get(_promptSchemaLibraryName, (err: any, res: any) => {
    if (err) {
      console.log(colors.red("К сожалению, при создании рабочей области произошла ошибка :("))
      removeItems()
      process.exit(1)
      return
    }

    setupLibrary(res.library)
  })
}

/**
 * Sees if the users wants to accept the suggested library name if the project
 * has been cloned into a custom directory (i.e. it's not 'typescript-library-starter')
 */
function libraryNameSuggestedAccept() {
  _prompt.get(_promptSchemaLibrarySuggest, (err: any, res: any) => {
    if (err) {
      console.log(colors.red("Извините, вам нужно ввести имя библиотеки"))
      libraryNameCreate()
    }

    if (res.useSuggestedName.toLowerCase().charAt(0) === "y") {
      setupLibrary(libraryNameSuggested())
    } else {
      libraryNameCreate()
    }
  })
}

/**
 * The library name is suggested by looking at the directory name of the
 * tools parent directory and converting it to kebab-case
 *
 * The regex for this looks for any non-word or non-digit character, or
 * an underscore (as it's a word character), and replaces it with a dash.
 * Any leading or trailing dashes are then removed, before the string is
 * lowercased and returned
 */
function libraryNameSuggested() {
  return path
    .basename(path.resolve(__dirname, ".."))
    .replace(/[^\w\d]|_/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
}

/**
 * Checks if the suggested library name is the default, which is 'typescript-library-starter'
 */
function libraryNameSuggestedIsDefault() {
  if (libraryNameSuggested() === "ksa-typescript-starter") {
    return true
  }

  return false
}



/**
 * Calls all of the functions needed to setup the library
 *
 * @param libraryName
 */
function setupLibrary(libraryName: string) {
  console.log(
    colors.cyan(
      "\nСпасибо за информацию. Внесены последние несколько изменений ... держитесь!\n\n"
    )
  )

  // Get the Git username and email before the .git directory is removed
  let username = exec("git config user.name").stdout.trim()
  let usermail = exec("git config user.email").stdout.trim()

  removeItems()

  modifyContents(libraryName, username, usermail)

  finalize()

  console.log(colors.cyan("ОК, все готово. Удачного кодирования !!;)\n"))
}

/**
 * Removes items from the project that aren't needed after the initial setup
 */
function removeItems() {
  console.log(colors.underline.white("удален"))

  // The directories and files are combined here, to simplify the function,
  // as the 'rm' command checks the item type before attempting to remove it
  let rmItems = rmDirs.concat(rmFiles)
  rm("-rf", rmItems.map(f => path.resolve(__dirname, "..", f)))
  console.log(colors.red(rmItems.join("\n")))

  console.log("\n")
}

/**
 * Updates the contents of the template files with the library name or user details
 *
 * @param libraryName
 * @param username
 * @param usermail
 */
function modifyContents(libraryName: string, username: string, usermail: string) {
  console.log(colors.underline.white("Изменен"))

  let files = modifyFiles.map(f => path.resolve(__dirname, "..", f))
  try {
    const changes = replace.sync({
      files,
      from: [/--libraryname--/g, /--username--/g, /--usermail--/g],
      to: [libraryName, username, usermail]
    })
    console.log(colors.yellow(modifyFiles.join("\n")))
  } catch (error) {
    console.error("Произошла ошибка при изменении файла: ", error)
  }

  console.log("\n")
}



/**
 * Calls any external programs to finish setting up the library
 */
function finalize() {
  console.log(colors.underline.white("Завершение"))

  // Recreate Git folder
  let gitInitOutput = exec('git init "' + path.resolve(__dirname, "..") + '"', {
    silent: true
  }).stdout
  console.log(colors.green(gitInitOutput.replace(/(\n|\r)+/g, "")))

  // Remove post-install command
  let jsonPackage = path.resolve(__dirname, "..", "package.json")
  const pkg = JSON.parse(readFileSync(jsonPackage) as any)

  // Note: Add items to remove from the package file here
  delete pkg.scripts.postinstall

  writeFileSync(jsonPackage, JSON.stringify(pkg, null, 2))
  console.log(colors.green("Сценарий постинсталляции удален"))

  // Initialize Husky
  fork(
    path.resolve(__dirname, "..", "node_modules", "husky", "bin", "install"),
    { silent: true }
  );
  console.log(colors.green("Настроены хуки Git"))

  console.log("\n")
}
