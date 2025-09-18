CREATE DATABASE IF NOT EXISTS crud_api;
USE crud_api;

-- Crear la tabla solo si no existe
CREATE TABLE IF NOT EXISTS tbl_alumnos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre_alumno VARCHAR(255) DEFAULT NULL,
  email_alumno VARCHAR(255) DEFAULT NULL,
  curso_alumno VARCHAR(50) DEFAULT NULL,
  sexo_alumno VARCHAR(20) DEFAULT NULL,
  habla_ingles TINYINT(1) DEFAULT NULL,
  fecha_registro TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Insertar datos solo si la tabla está vacía
INSERT INTO tbl_alumnos (id, nombre_alumno, email_alumno, curso_alumno, sexo_alumno, habla_ingles, fecha_registro)
SELECT * FROM (
    SELECT 1 AS id, 'Braudin' AS nombre_alumno, 'braudin@gmail.com' AS email_alumno, 'React Native' AS curso_alumno, 'M' AS sexo_alumno, 0 AS habla_ingles, '2024-02-18 20:49:51' AS fecha_registro
    UNION ALL
    SELECT 4, 'Any Luz', 'any@gmail.com', 'React Native', 'F', 0, '2024-02-18 20:59:31'
    UNION ALL
    SELECT 10, 'Alejandro', 'joslito@gmail.com', 'NodeJS', 'masculino', 1, '2024-02-19 21:40:42'
    UNION ALL
    SELECT 11, 'bonito editado', 'josl444ito@gmail.com', 'Python', 'masculino', 0, '2024-02-19 22:26:28'
    UNION ALL
    SELECT 15, 'alumno nuevo', 'nuevo@gmail.com', 'Python', 'masculino', 1, '2024-02-20 15:28:08'
    UNION ALL
    SELECT 16, 'Urian Viera', 'urianviera@gmail.com', 'ReactJS', 'masculino', 0, '2024-02-20 20:10:32'
    UNION ALL
    SELECT 19, 'Jesus', 'jesus@gmail.com', 'React', 'F', 0, '2024-02-21 20:37:20'
) AS tmp
WHERE NOT EXISTS (SELECT 1 FROM tbl_alumnos LIMIT 1);

