INSERT INTO "languages" ("name")
VALUES ('HTML'),
       ('CSS'),
       ('JavaScript'),
       ('ARMENIAN'),
       ('TURKISH')
RETURNING *;
