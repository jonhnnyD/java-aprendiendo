cofla= prompt ('Cuanto dineros tiene cofla?: ');
pedro= prompt ('Cuanto dineros tiene pedro?: ');
ramiro= prompt ('Cuanto dineros tiene ramiro?: ');
//helado De Agua= 0.6
//helado De Crema= 1
//bombon Helado1= 1.6
//bombon Helado2= 1.7
//bombon Helado3= 1.8
//pote Helado Confites= 2.9
//pote CuartoKilo=2.9
cofla = parseInt (cofla);
pedro = parseInt (pedro);
ramiro = parseInt (ramiro);

if(cofla >= 0.6 && cofla < 1){
    alert ('Cofla Te alcanza para el Helado de agua');
    alert ('y te sobran '+ (cofla-0.6));
}
else if(cofla >= 1 && cofla < 1.6 ){
    alert ('Cofla Te alcanza para el Helado de crema');
    alert ('y te sobran '+ (cofla-1));
}
else if(cofla >= 1.6 && cofla < 1.7){
    alert ('Cofla Te alcanza para el palito bombon helado de tercera');
    alert ('y te sobran '+ (cofla-1.6));
}
else if(cofla >= 1.7 && cofla < 1.8){
    alert ('Cofla Te alcanza para el palito bombon helado de segunda');
    alert ('y te sobran '+ (cofla-1.7));
}
else if(cofla >= 1.8 && cofla < 2.8){
    alert ('Cofla Te alcanza para el palito bombon helado de primera');
    alert ('y te sobran '+ (cofla-1.8));
}
else if(cofla >= 2.9 ){
    alert ('Cofla Te alcanza para el helado con confites o pote de 1/4');
    alert ('y te sobran '+ 
    (cofla-2.9));
}




if(pedro >= 0.6 && pedro < 1 ){
    alert ('Pedro Te alcanza para el Helado de agua');
    alert ('y te sobran '+ pedro-(0.6));
}
else if(pedro >= 1 && pedro < 1.6 ){
    alert ('Pedro Te alcanza para el Helado de crema');
    alert ('y te sobran '+ (pedro-1));
}
else if(pedro >= 1.6 && pedro < 1.7 ){
    alert ('Pedro Te alcanza para el palito bombon helado de tercera');
    alert ('y te sobran '+ (pedro-1.6));
}
else if(pedro >= 1.7 && pedro < 1.8){
    alert ('Pedro Te alcanza para el palito bombon helado de segunda');
    alert ('y te sobran '+ (pedro-1.7));
}
else if(pedro >= 1.8 && pedro < 2.9){
    alert ('Pedro Te alcanza para el palito bombon helado de primera');
    alert ('y te sobran '+ (pedro-1.8));
}
else if(pedro >= 2.9 ){
    alert ('Pedro Te alcanza para el helado con confites o pote de 1/4');
    alert ('y te sobran '+ (pedro-2.9));
}



if(ramiro >= 0.6 && ramiro < 1 ){
    alert ('Ramiro Te alcanza para el Helado de agua');
}
else if(ramiro >= 1 && ramiro < 1.6 ){
    alert ('Ramiro Te alcanza para el Helado de crema');
}
else if(ramiro >= 1.6 && ramiro < 1.7){
    alert ('Ramiro Te alcanza para el palito bombon helado de tercera');
}
else if(ramiro >= 1.7 && ramiro < 1.8 ){
    alert ('Ramiro Te alcanza para el palito bombon helado de segunda');
}
else if(ramiro >= 1.8 && ramiro < 2.9){
    alert ('Ramiro Te alcanza para el palito bombon helado de primera');
}
else if(ramiro >= 2.9 ){
    alert ('Ramiro Te alcanza para el helado con confites o pote de 1/4');
}