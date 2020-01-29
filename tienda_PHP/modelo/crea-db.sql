DROP DATABASE IF EXISTS refrescos;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE refrescos;

CREATE USER IF NOT EXISTS user@localhost IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON refrescos.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

USE refrescos ;

CREATE TABLE unidades (
 _idproducto INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 precio  INT NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idproducto));

INSERT INTO unidades VALUES (NULL, "CocaCola",3,"CocaCola.png");
INSERT INTO unidades VALUES (NULL, "Fanta",4,"Fanta.png");
INSERT INTO unidades VALUES (NULL, "RedBull",2,"RedBull.jpeg");


CREATE TABLE refrescos (
 _idcompra INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 cantidad INT NOT NULL,
 total INT NOT NULL,
 PRIMARY KEY (_idcompra));