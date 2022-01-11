# Explicación

El algoritmo primero compara si tiene un espacio al principio (`^(\s)`) o (`|`) si tiene dos espacios seguidos (`(\s\s)`) o (`|`) si tiene un espacio al final (`(\s)$`). El resultado que devuelvo debe ser lo contrario (`!`) a lo que devuelva el método `match()`.
