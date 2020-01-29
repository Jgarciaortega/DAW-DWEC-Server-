DROP DATABASE IF EXISTS team;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE team;

CREATE USER IF NOT EXISTS user@localhost IDENTIFIED BY 'user';
GRANT ALL PRIVILEGES ON team.* TO 'user'@'localhost';
FLUSH PRIVILEGES;

USE team ;

CREATE TABLE equipo (
 _idjugador INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 nombreEquipo VARCHAR(255) NOT NULL,
 demarcacion VARCHAR(255) NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idjugador));

INSERT INTO equipo VALUES (NULL, "Courtois","Real Madrid","Portero","courtois.jpg");
INSERT INTO equipo VALUES (NULL, "Carvajal","Real Madrid","Defensa","carvajal.jpg");
INSERT INTO equipo VALUES (NULL, "Ramos","Real Madrid","Defensa","ramos.jpg");
INSERT INTO equipo VALUES (NULL, "Varane","Real Madrid","Defensa","varane.jpg");
INSERT INTO equipo VALUES (NULL, "Marcelo","Real Madrid","Defensa","marcelo.jpg");
INSERT INTO equipo VALUES (NULL, "Kroos","Real Madrid","Centrocampista","kroos.jpg");
INSERT INTO equipo VALUES (NULL, "Modric","Real Madrid","Centrocampista","modric.jpg");
INSERT INTO equipo VALUES (NULL, "Casemiro","Real Madrid","Centrocampista","casemiro.jpg");
INSERT INTO equipo VALUES (NULL, "Valverde","Real Madrid","Centrocampista","valverde.jpg");
INSERT INTO equipo VALUES (NULL, "Hazard","Real Madrid","Delantero","hazard.jpg");
INSERT INTO equipo VALUES (NULL, "Benzema","Real Madrid","Delantero","benzema.jpg");
INSERT INTO equipo VALUES (NULL, "Bale","Real Madrid","Reserva","bale.jpg");
INSERT INTO equipo VALUES (NULL, "Jovic","Real Madrid","Reserva","jovic.jpg");
INSERT INTO equipo VALUES (NULL, "Isco","Real Madrid","Reserva","isco.jpg");
INSERT INTO equipo VALUES (NULL, "James","Real Madrid","Reserva","james.jpg");



