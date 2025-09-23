let result = 0, count = 0, note;

while (true) 
{
  note = +prompt("Entrez une note (0-20) ou -1 pour arrêter :");

  if (note == -1) 
  break;

  if (note >= 0 && note <= 20) 
  {
    result += note;
    count++;
  } 
  else 
  {
    alert("Note non valide !");
  }
}

if (count > 0) 
{
  alert("Nombre de notes = " + count + " , Moyenne = " + (result / count));
} 
else 
{
  alert("Aucune note valide !");
}
