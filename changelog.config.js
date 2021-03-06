module.exports = {

  "disableEmoji": false,
  "enableWritingScopes": true,
  "list": [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf",
    "package"
  ],
  "maxMessageLength": 265,
  "minMessageLength": 3,
  "maxHeaderWidth": 100,
  "maxLineWidth": 100,
  "questions": [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues"
  ],

  "scopes": [],
  "types": {
    "chore": {
      "description": "Смена процесса сборки или вспомогательного инструмента",
      "emoji": "🤖",
      "value": "chore"
    },
    "ci": {
      "description": "Изменения, связанные с CI",
      "emoji": "🎡",
      "value": "ci"
    },
    "docs": {
      "description": "Изменения только документации",
      "emoji": "📖",
      "value": "docs"
    },
    "feat": {
      "description": "Новая функция",
      "emoji": "🎁",
      "value": "feat"
    },
    "fix": {
      "description": "Исправление ошибки!",
      "emoji": "🐛",
      "value": "fix"
    },
    "perf": {
      "description": "Изменение кода, которое улучшает производительность",
      "emoji": "⚡️",
      "value": "perf"
    },
    "refactor": {
      "description": "Изменение кода, которое ни исправляет ошибку, ни добавляет функцию",
      "emoji": "💡",
      "value": "refactor"
    },
    "release": {
      "description": "Создать коммит релиза",
      "emoji": "🏆",
      "value": "release"
    },
    "style": {
      "description": "Разметка, пробелы, форматирование, пропущенные точки с запятой ...",
      "emoji": "♥️",
      "value": "style"
    },
    "test": {
      "description": "Добавление недостающих тестов ",
      "emoji": "💍",
      "value": "test"
    },
    "package": {
      "description": "Обновление пакетов зависимостей",
      "emoji": "🚀",
      "value": "package"
    }
  }
}
