export function tempoParaSegundos(tempo: string): number{
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');
    const horasEmSegundos = Number(horas) * 3600;
    const mintosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + mintosEmSegundos + Number(segundos);
}