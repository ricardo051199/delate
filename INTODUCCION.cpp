#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TAM 100

typedef struct
{
    int hora, min, seg;
}tipoHora;

void leerHora(tipoHora *hora)
{
    printf("Hora : ");
    scanf("%d", &((*hora).hora));
    printf("Min : ");
    scanf("%d", &((*hora).min));
    printf("Seg : ");
    scanf("%d", &((*hora).seg));
    printf("\n");
}

int verificarHoraPosterior(tipoHora hora1, tipoHora hora2)
{
    int horaPosterior;
    if(hora1.hora>hora2.hora || (hora1.hora==hora2.hora && hora1.min>hora2.min) || (hora1.hora==hora2.hora && hora1.min==hora2.min && hora1.seg>hora2.seg))
        horaPosterior=1;
    else
        horaPosterior=0;
    return horaPosterior;
}

int verificarHoraValida(tipoHora hora)
{
    int horaValida;
    if(hora.hora<60 && hora.min<60 && hora.seg<60)
        horaValida=1;
    else
        horaValida=0;
    return horaValida;
}
 

int main()
/*{
    tipoHora h1, h2;
    int posterior;
    printf("Ingrese la primera hora\n");
    leerHora( h1);
    printf("Ingrese la segunda hora\n");
    leerHora( h2);
    posterior=verificarHoraPosterior( h1, h2);
    printf("La primera hora es posterior a la segunda : %d\n", posterior);
}*/
{
    tipoHora h;
    int valido;
    printf("Ingrese la hora\n");
    leerHora( h);
    valido=verificarHoraValida( h);
    printf("La hora es valida : %d\n", valido);
}
