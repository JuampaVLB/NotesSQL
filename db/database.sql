CREATE DATABASE IF NOT EXISTS notesSQL;

USE notesSQL;

CREATE TABLE note (
    id_note INT(11) NOT NULL PRIMARY KEY,
    name_note VARCHAR(20) DEFAULT NULL,
    task_note VARCHAR(200) DEFAULT NULL,
    state_note BOOLEAN DEFAULT NULL
);