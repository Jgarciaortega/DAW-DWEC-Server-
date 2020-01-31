DROP DATABASE IF EXISTS stock;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE stock;

CREATE USER IF NOT EXISTS user@localhost IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON team.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

USE stock ;

CREATE TABLE equipo (
 _idproducto INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 precio VARCHAR(255) NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idjugador));






