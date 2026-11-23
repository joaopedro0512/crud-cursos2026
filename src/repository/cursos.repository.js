import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS cursos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        Valor REAL NOT NULL,
        TIPO TEXT NOT NULL
        )
        `);
    
    function CreateCursosRepository(novoCurso){
        return new Promise((resolve,reject) => {
            const {
                nome,
                valor,
                tipo,
            } = novoCurso;
            db.run(`
                INSERT INTO cursos (nome, valor, tipo)
                VALUES (?, ?, ?)`, 
                [nome, valor, tipo],
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

    export default {
        CreateCursosRepository,
    };
