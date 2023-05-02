export type datos = {
  id: string;
  title: string;
  isDone: boolean;
};

export type dataObject = {
  // tipo de dato que se va a enviar a la API
  id: string; // el id es un string
  title?: string; // el título es un string opcional
  isDone?: boolean; // isDone es un booleano opcional
};

export class Fetch {
  // clase Fetch
  static BASE_URL: string = "http://localhost:8000/tasks"; // la URL de la API
  static async getAll() {
    // esta función obtiene todas las tareas
    const response: Response = await fetch("http://localhost:8000/tasks"); // esta función hace una petición a la API
    if (!response.ok) {
      // si la respuesta no es correcta
      throw new Error( // lanza un error
        `Error al obtener las tareas: ${response.status} ${response.statusText}`
      ); // con el status y el texto de la respuesta
    }
    const data: datos = await response.json(); // convierte la respuesta en un array de objetos
    return data; // devuelve un array de objetos
  }

  static async create(task: datos) {
    // esta función crea una tarea
    const response: Response = await fetch(this.BASE_URL, {
      // esta función hace una petición a la API
      method: "POST", // con el método POST
      headers: {
        // y con el header de Content-Type: application/json
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task), // y el body de la tarea en formato JSON
    });
    if (!response.ok) {
      // si la respuesta no es correcta
      throw new Error( // lanza un error
        `Error al crear la tarea: ${response.status} ${response.statusText}` // con el status y el texto de la respuesta
      );
    }
    const data: datos = await response.json(); // convierte la respuesta en un array de objetos
    return data; // devuelve un array de objetos
  }

  static async update(task: dataObject) {   // esta función actualiza una tarea
    const response: Response = await fetch(`${this.BASE_URL}${task.id}`, {    // esta función hace una petición a la API
      method: "PATCH",    // con el método PATCH
      headers: {    // y con el header de Content-Type: application/json
        "Content-Type": "application/json",   // y el body de la tarea en formato JSON
      },
      body: JSON.stringify(task),   // y el body de la tarea en formato JSON
    });
    if (!response.ok) {   // si la respuesta no es correcta
      throw new Error(    // lanza un error
        `Error al actualizar la tarea: ${response.status} ${response.statusText}`   // con el status y el texto de la respuesta
      );
    }
    const data: datos = await response.json();      // convierte la respuesta en un array de objetos
    return data;    // devuelve un array de objetos
  }

  static async delete(id: string) {   // esta función elimina una tarea
    const response: Response = await fetch(`${this.BASE_URL}${id}`, {   // esta función hace una petición a la API
      method: "DELETE",   // con el método DELETE
    });
    if (!response.ok) {   // si la respuesta no es correcta
      throw new Error(    // lanza un error
        `Error al eliminar la tarea: ${response.status} ${response.statusText}`   // con el status y el texto de la respuesta
      );
    }
  }
}
