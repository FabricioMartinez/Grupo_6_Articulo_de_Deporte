import os


def presionarTecla():
   input('Presione una tecla...')

def menu():
    os.system('cls')
    print('1) Leer alumnos')
    print('2) Mostrar alumnos')
    print('3) Buscar por DNI')
    print('4) Ordenar')
    print('5) salir ')
    opcion = int(input('Seleccione una opción: '))
    return opcion
    
def leerNota():
    nota = float(input('Nota: '))
    while not(nota >= 0 and nota <= 10):
        print('Nota no válida...')
        nota = float(input('Nota: '))
    return nota    

def leerAlumnos():
    lista = []
    dni = 999
    while dni != 0:
        dni = int(input('DNI: '))
        if dni != 0:
            nombre = input('Nombre: ')
            nota = leerNota()
            lista.append([dni, nombre, nota])
    return lista

def buscarPorDni(alumnos, dni):
    pos = -1
    for i, item in enumerate(alumnos):
        if(item[0] == dni):
            pos = i
            break
    return pos    

def buscar(alumnos): 
    dni = int(input('DNI: '))
    pos = buscarPorDni(alumnos, dni)
    if(pos == -1): 
        print('No existe el dni ingresado...')
    else:
        print(alumnos[pos])    
    presionarTecla()    

def bubbleSort(alumnos):
    n = len(alumnos)
    for i in range(n):
        for j in range(0, n-1):
            if alumnos[j][1] > alumnos[j+1][1]:
                alumnos[j], alumnos[j+1] = alumnos[j+1], alumnos[j]
    return
    
def mostrarAlumnos(lista):
    for posicion, alumno in enumerate(lista):
        print(posicion, alumno)
    return

def inicializar():
    estudiantes = []
    estudiantes = [[88,'Mary', 10.0],
                    [29,'Anna', 2.0],
                    [53,'Juan', 7.5],
                    [67,'Pedro',6.5]]    
    return estudiantes                

#Principal
alumnos = inicializar()
opcion = 0

while opcion != 5: 
    opcion = menu()
    if opcion == 1:
        alumnos = leerAlumnos()
    elif opcion == 2:
        mostrarAlumnos(alumnos)
        presionarTecla()
    elif opcion == 3: 
        buscar(alumnos)    
    elif opcion == 4: 
        bubbleSort(alumnos)    
        mostrarAlumnos(alumnos)
        presionarTecla()
    elif opcion == 5:
        print('Fin del programa...')    
        presionarTecla()


