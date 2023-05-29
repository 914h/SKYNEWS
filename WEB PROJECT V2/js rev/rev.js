var nom = parseInt(prompt("nom d’un produit informatique: "));
var qua = parseInt(prompt("la quantité demandée  : "));
var pr = parseInt(prompt("Le prix unitaire "));

var mht = qua * pr;
var tva = mht * 0.2;
var ttc = mht + tva;

document.write(`
<table border="1">
<tr>
le nom du produit : 
</tr>
<td>
${nom}
</td>
<br>
Le montant Hors Taxe : ${mht}
<br>
Le montant TVA : ${tva}
<br>
Le montant à payer (TTC) : ${ttc}
</table>`);