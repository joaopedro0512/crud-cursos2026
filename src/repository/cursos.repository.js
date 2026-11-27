import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS cursos (
        id_cursos INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL UNIQUE,
        area REAL NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
        )
        `);
    
    function CreateCursosRepository(novoCurso){
        return new Promise((resolve,reject) => {
            const {
                nome,
                area,
                nivel,
                modalidade
            } = novoCurso;
            db.run(`
                INSERT INTO cursos (nome, area, nivel, modalidade)
                VALUES (?, ?, ?, ?)`, 
                [nome, area, nivel, modalidade],
                function(error){
                    if (error) {
                        reject(error);
                    } else {
                        resolve({ ...novoCurso, id: this.lastID });
                    }
                }

            )
        });
    }

    function readAllcursosRepository() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM cursos`, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    export default {
        CreateCursosRepository,
        readAllcursosRepository
    };
