#############################################################
**Інформація по торговим мережам (масив об'єктів)**
#############################################################

**JSON:**

.. code:: json

  [
    {
      "id": 7,
      "name": "Варус (ОМЕГА)",
      "gln": "4820110632160",
      "aliasName": "Варус(ОМЕГА))",
      "type": 1
    },
    {
      "id": 8,
      "name": "Старый Колос",
      "gln": "4829900003845",
      "aliasName": "Олд_Колос",
      "type": 1
    },
    {
      "id": 9,
      "name": "АТБ-маркет",
      "gln": "4820128010004",
      "aliasName": "АТБ-маркет",
      "type": 1
    },
    {
      "id": 17297,
      "name": "Интеграция",
      "gln": "1234567890123",
      "aliasName": "Интеграция",
      "type": 2
    }
  ] 

Таблиця 1 - Опис параметрів

+--------------+------------+---------------------------------------+
| **Параметр** | **Формат** |               **Опис**                |
+==============+============+=======================================+
| id           | число      | ідентифікатор роздрібної мережі       |
+--------------+------------+---------------------------------------+
| name         | рядок      | ім'я роздрібної мережі                |
+--------------+------------+---------------------------------------+
| gln          | рядок (13) | номер GLN організації                 |
+--------------+------------+---------------------------------------+
| aliasName    | рядок      | бренд ТЗ, альтернативне ім'я          |
+--------------+------------+---------------------------------------+
| type         | число      | тип мережі, 1 - пряма, 2 - роумінгова |
+--------------+------------+---------------------------------------+

