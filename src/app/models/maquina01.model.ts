export class Maquina01 {

    id_maquina_01: number;
    nombre_maquina:	string;
    fecha_informe:	Date;
    contador_in: number;    
    contador_out: number;
    dif_contador: number;
    valor_pesos: number;
    descuento: number;	   
    total_1: number;	   
    total_2: number;	

    constructor(id_maquina_01: number, nombre_maquina:	string, fecha_informe:	Date, contador_in: number, contador_out: number, dif_contador: number, valor_pesos: number, descuento: number, total_1: number,	total_2: number ){
        this.id_maquina_01 = id_maquina_01;
        this.nombre_maquina = nombre_maquina;
        this.fecha_informe = fecha_informe;
        this.contador_in = contador_in;
        this.contador_out = contador_out;
        this.dif_contador = dif_contador;
        this.valor_pesos = valor_pesos;
        this.descuento = descuento;
        this.total_1 = total_1;
        this.total_2 = total_2;
    }

}