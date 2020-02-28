
export const htmlGenerate = (idName: string, htmlDate: string): HTMLElement => {
    const getMyElement: HTMLElement = <HTMLElement>document.getElementById(idName);
    getMyElement.innerHTML = htmlDate;
    return getMyElement;
 }