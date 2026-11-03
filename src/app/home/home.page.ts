export class HomePage {
  // URL de la imagen que se muestra; se genera al cargar la página
  imagenUrl: string = this.nuevaImagen();

  // El parámetro random con un número distinto evita que el navegador reutilice la imagen en caché
  nuevaImagen(): string {
    return `https://picsum.photos/200?random=${Math.random()}`;
  }

  // Se llama al pulsar el botón para cambiar la imagen
  cambiarImagen(): void {
    this.imagenUrl = this.nuevaImagen();
  }
}