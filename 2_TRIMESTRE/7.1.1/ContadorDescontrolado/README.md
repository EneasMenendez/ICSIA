Antes de la optimizacion: 

En el primer incremento:
![alt text](image.png)
En el segundo incremento: 
![alt text](image-1.png)
En el tercer incremento: 
![alt text](image-2.png)
En el cuarto incremento:
![alt text](image-3.png)
En el quinto incremento:
![alt text](image-4.png)

4. ¿Se ve lento el navegador?¿Cuantas funciones (console.log) se ejecutan en cada click?
El navegador va lento, ya que cada click se estan cargando aproximadamente 2000 console.log.


5. ¿Son todos los renderizados necesarios?¿Por qué?
No, no son necesarios ya que React vuelve a ejecutar todo el árbol de componentes hijo cadavez que cambia el estado de un componente
padre (ContadorPadre) y aunque el contador sea lo unico que se ejecuta, todos los hijos se vuelven a renderizar.

Despues de la optimizacion con useMemo();