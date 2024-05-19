const API_URL = "http://192.168.1.2/apilearning4all/api.php";
const API_IMAGE_BASE_URL = "http://192.168.1.2/apilearning4all/images/";

const getCursos = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error al obtener los cursos');
        }
        const data = await response.json();
        // Modificar las URL de las imágenes
        const cursosConURLModificada = data.map(curso => ({
            ...curso,
            image_url: API_IMAGE_BASE_URL + curso.image.split('/').pop()
        }));
        console.log("Cursos obtenidos:", cursosConURLModificada); // Agregar console.log para verificar los cursos obtenidos
        return cursosConURLModificada;
    } catch (error) {
        console.error('Error al obtener los cursos:', error.message);
        throw error;
    }
};

export { getCursos };
