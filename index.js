// Le pido al usuario que ingrese su DNI para compararlo con el DNI existente en la "base de datos",
// si el DNI es el mismo le muestro la nota que le corresponde.
// Le dejo que intente hasta 3 veces.

const dniDB = 43211234;
let nota = 7;
let intentos = 1;
let ingresa_correctamente = 0;

do // pedir datos mientras que no se llegue al límite de intentos
{
  let dni_ingresado = parseInt(prompt("Ingrese su DNI"));
  if (dni_ingresado == dniDB) {
    console.log("Nota: \n", nota);
    intentos = 3;
  } else {
    console.log(
      "DNI ingresado no cohincide con la base de datos. Intente nuevamente.\n"
    );
    console.log(
      "Precaucion. Por seguridad al tercer intento fallido se le bloqueara el ingreso.\n"
    );
    console.log("Intento Nro: %d\n\n", intentos);
  }

  intentos++; //muestra al usuario los intentos efectuados
} while (intentos <= 3); //si llega al limite no vuelve a pedir datos
