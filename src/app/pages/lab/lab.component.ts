import { Component, signal } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-lab',
  standalone:true,
  imports: [
    TodoComponent,
    ReactiveFormsModule
  ],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss'
})
export class LabComponent {
  title = 'Laboratiorio';
  name = signal<string>('Angel');
  age = 32;
  disabled = true;
  items = [
  ]
  frutas = [
    'manzana',
    'pera',
    'melon'
  ]
  img = 'https://picsum.photos/200/300'
  person = signal({
    name: 'Angel',
    age: 32,
    avatar:'https://picsum.photos/200/300'
  })
  text1 = 'More Event Binding Examples';
  textsignal= signal('texto señal')

  signallist = signal([
    'señal0',
    'señal1',
    'señal2',
    'señal3',
    'señal4'
  ])
  ejemif: string = '@if'
  mostrarMensaje = false;
  valor = 0;
  nvalor = signal<number>(5)

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });


  constructor(){
    this.colorCtrl.valueChanges.subscribe(value =>{
      console.log(value)
    })
  }
  keydonwHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    console.log(input.value)
    this.textsignal.set(newValue)

  }
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    console.log(input.value)
    this.textsignal.set(newValue)
  }
  clickHandler(evenet: Event) {
    console.log(evenet)
    console.log('Se ejecuto (click)="clickHandler()"');
  }
  updateSignal(event: Event) {
  const input = event.target as HTMLInputElement;
  if (event.type === 'keydown') {
    setTimeout(() => {
      this.textsignal.set(input.value);
    }, 0);
  } else {
    this.textsignal.set(input.value);
  }

  console.log('Evento:', event.type, 'Valor:', input.value);
  }
  sumale(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    console.log(newValue);
    const newNumberValue = Number(newValue);

    if (!isNaN(newNumberValue)) {
      this.nvalor.set(newNumberValue);
    } else {
      console.error('El valor ingresado no es un número válido.');
    }
  }
  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  onMouseOverDiv() {
    console.log('(mouseover): El cursor del ratón entró en el elemento div.');
  }

  onMouseOutDiv() {
    console.log('(mouseout): El cursor del ratón salió del elemento div.');
  }

  onMouseDownButton() {
    console.log('(mousedown): Se presionó un botón del ratón sobre el elemento button.');
  }

  onMouseUpButton() {
    console.log('(mouseup): Se soltó un botón del ratón sobre el elemento button.');
  }

  onInputFocus() {
    console.log('(focus): El elemento input ha recibido el foco.');
  }

  onInputBlur() {
    console.log('(blur): El elemento input ha perdido el foco.');
  }

  onSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.log('(change): El valor del elemento select ha cambiado.', target.value);
  }

  onSubmitForm(event: Event) {
    event.preventDefault(); // Evita la recarga de la página
    console.log('(submit): Se intentó enviar el formulario.');
  }

  onScrollDiv(event: Event) {
    const target = event.target as HTMLDivElement;
    console.log('(scroll): Se ha desplazado el contenido del div.', `Posición Y: ${target.scrollTop}`);
  }

  onCopy(event: ClipboardEvent) {
    console.log('(copy): Se intentó copiar texto del elemento.');
  }

  onCut(event: ClipboardEvent) {
    console.log('(cut): Se intentó cortar texto del elemento.');
  }

  onPaste(event: ClipboardEvent) {
    console.log('(paste): Se intentó pegar texto en el elemento.');
  }

  onDragStart(event: DragEvent) {
    console.log('(dragstart): Se inició la operación de arrastre en el elemento.');
    // Puedes configurar dataTransfer aquí
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // Permite soltar en este objetivo
    console.log('(dragover): El elemento arrastrado está sobre la zona de soltar.');
  }

  onDrop(event: DragEvent) {
    event.preventDefault(); // Evita el comportamiento por defecto de soltar
    console.log('(drop): Se soltó un elemento en la zona de soltar.');
    // Puedes procesar los datos transferidos aquí
  }

  toggleMensaje() {
    this.mostrarMensaje = !this.mostrarMensaje;
  }

  cambiarValor() {
    this.valor = (this.valor + 1) % 3; // Cambia entre 0, 1 y 2
  }
}
