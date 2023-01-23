var mysql = require('../../mysql').pool;

function registerUser(user) {
    let response = {}
    mysql.getConnection((error, conn) => {
        if (error) { response = { error: error } }
        conn.query(
            'INSERT INTO persons (FirstName, Family, ActorBirth, Died ) VALUES (?,?,?,?)',
            [user.FirstName, user.Family, user.ActorBirth, user.Died],
            (error, resultado) => {
                console.log(resultado)
                conn.release();
                if (error) { response = { error: error } }
                response = { PersonId: resultado.insertId, error: null }
            }
        )
    })
    return response;
}

module.exports = registerUser