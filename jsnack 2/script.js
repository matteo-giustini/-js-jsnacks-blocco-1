const invitati = ['pippo', 'franco', 'ciccio', 'matteo', 'samuele']
let guestname
let isInvited= false
do {
    guestname = .toLowerCase(prompt("Inserisci il nome dell'invitato:"))

for (let i = 0; i < invitati.length; i++) {
        if (guestname === invitati[i]) {
            isInvited = true;
            break
        }
    }
if (isInvited) {
        alert(`${guestname}, puoi entrare!`)
    } else {
        alert(`${guestname}, tu non puoi entrare!`)
    }
} while (!isInvited)