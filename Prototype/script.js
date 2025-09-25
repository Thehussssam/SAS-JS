while (true)
{
  let input = prompt("Enter a code (C1, C2, C3, C5, C6, C7, C4, C8):");

if (input == null) 
  {
    alert("GOOD BYE");
    break;
  }

if (input == "exit")
  {
    alert("GOOD BYE");
    break;
  }
  switch (input) {
    case "C1":
        alert("Maquetter une application");
        break;
    case "C2":
        alert("Réaliser une interface utilisateur web statique et adaptable");
        break;
    case "C3":
        alert("Développer une interface utilisateur web dynamique");
        break;
    case "C5":
        alert("Créer une base de données - niveau 1");
        break;
    case "C6":
        alert("Développer les composants d’accès aux données - niveau 1");
        break;
    case "C7":
        alert("Développer la partie back-end d’une application web ou web mobile - niveau 1");
        break;
    case "C4":
      alert("Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce");
      break;
    case "C8":
      alert("Framwork FrontEnd (React, vueJs...)");
      break;
    default:
      alert("Cette compétence n'existe pas");
  }
}