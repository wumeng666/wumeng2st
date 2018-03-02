DROP DATABASE IF EXISTS dyq;
CREATE DATABASE IF NOT EXISTS dyq;

use dyq;
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
	id int(4) not null AUTO_INCREMENT,
    username char(100) not null,
    sex char(2) not null,
    password char(100) not null,
    newpad char(100) not null,
    stutas int(1),
    PRIMARY KEY(id)
);
INSERT INTO users VALUES(1,"董亚倩","1","18330929033","18330929033",0);
select * from users;