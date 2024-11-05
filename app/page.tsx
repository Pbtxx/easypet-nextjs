import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" 
import { PawPrint, Bell, BookOpen, PhoneCall, Clock, Heart, Brain, Smile, Users, CheckCircle2 } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-50 text-sky-900">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="#">
          <PawPrint className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">EasyPet</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#how-it-works">
            Cómo funciona
          </a>
          <a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#benefits">
            Beneficios
          </a>
          <a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#features">
            Características
          </a>
          <a className="text-sm font-medium hover:text-sky-600 transition-colors" href="#about">
            Sobre nosotros
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-sky-900">
                  EasyPet: Personaliza el cuidado de tu mascota
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Simplifica el cuidado de tu mascota con recordatorios, consejos y herramientas personalizadas.
                </p>
              </div>
              <PawPrint className="h-20 w-20 text-sky-5000" />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-sky-700">¿Cómo funciona EasyPet?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PawPrint className="h-6 w-6 mr-2 text-sky-500" />
                    Crea un perfil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Registra a tu mascota y sus necesidades específicas</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-6 w-6 mr-2 text-sky-500" />
                    Recibe recordatorios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Obtén notificaciones personalizadas para el cuidado de tu mascota</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-6 w-6 mr-2 text-sky-500" />
                    Accede a consejos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Obtén información útil y personalizada para tu mascota</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PhoneCall className="h-6 w-6 mr-2 text-sky-500" />
                    Consulta online
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contacta con veterinarios en línea cuando lo necesites</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-sky-700">Beneficios de usar EasyPet</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 mr-2 text-sky-500" />
                    Ahorra tiempo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Gestiona el cuidado de tu mascota de manera eficiente</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-sky-500" />
                    Mejora la salud
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Mantén a tu mascota en óptimas condiciones con cuidados regulares</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smile className="h-6 w-6 mr-2 text-sky-500" />
                    Reduce el estrés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organiza fácilmente todas las necesidades de tu mascota</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-sky-500" />
                    Fortalece el vínculo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dedica más tiempo de calidad a tu mascota</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-sky-500" />
                    Información confiable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Accede a consejos y recursos verificados por expertos</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-sky-500" />
                    Comunidad de apoyo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Conéctate con otros dueños de mascotas y comparte experiencias</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-sky-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-sky-700">Lo que EasyPet puede hacer por ti</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 text-justify">
                <CardHeader>
                  <CardTitle>Crea un perfil único para tu mascota</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Con EasyPet, puedes crear perfiles detallados de tus mascotas, incluyendo información sobre su raza, edad, historial médico, alergias y medicamentos. Esto te ayuda a tener toda la información importante de tu mascota en un solo lugar, fácilmente accesible cuando la necesites.</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 text-justify">
                <CardHeader>
                  <CardTitle>No olvides nunca más una cita o vacuna</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>EasyPet te envía recordatorios personalizados para vacunas, desparasitaciones, citas veterinarias y medicación. Nunca más te perderás una fecha importante para la salud de tu mascota. Nuestro sistema inteligente se adapta al calendario específico de cada mascota.</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 text-justify">
                <CardHeader>
                  <CardTitle>Consejos de expertos adaptados a tu mascota</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>EasyPet ofrece consejos personalizados sobre alimentación, salud, comportamiento y entrenamiento, adaptados a las necesidades específicas de cada mascota. Nuestro equipo de expertos veterinarios actualiza constantemente nuestra base de conocimientos para brindarte la mejor información.</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 text-justify">
                <CardHeader>
                  <CardTitle>Toda la información de tu mascota en un solo lugar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>EasyPet te permite almacenar y gestionar el historial médico completo de tu mascota. Desde vacunas y desparasitaciones hasta alergias y medicamentos, toda la información importante está organizada y fácilmente accesible cuando la necesites, incluso en situaciones de emergencia.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-sky-700">¿Por qué EasyPet?</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-justify mb-8">
              Sabemos lo difícil que puede ser recordar todas las necesidades de tu mascota. Entre visitas al veterinario, vacunas, desparasitaciones y rutinas de ejercicio, es fácil sentirse abrumado.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-justify mb-8">
              EasyPet nació de la necesidad de simplificar este proceso. Nuestra plataforma te ayuda a mantener un registro completo de la salud y el cuidado de tu mascota, enviándote recordatorios oportunos y proporcionándote información valiosa, todo en un solo lugar.
            </p>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-justify mb-12">
              Con EasyPet, podrás dedicar menos tiempo a la preocupación y más tiempo al amor. Porque creemos que cuidar de tu mascota debería ser una experiencia gratificante, no una tarea estresante.
            </p>
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8 text-sky-700">Nuestros valores</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-6 w-6 mr-2 text-sky-500" />
                    Amor por los animales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nuestra pasión por las mascotas impulsa todo lo que hacemos.</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="h-6 w-6 mr-2 text-sky-500" />
                    Confianza
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nos esforzamos por ser tu aliado de confianza en el cuidado de tu mascota.</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-6 w-6 mr-2 text-sky-500" />
                    Innovación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Buscamos constantemente nuevas formas de mejorar la vida de las mascotas y sus dueños.</p>
                </CardContent>
              </Card>
              <Card className="border-sky-200 shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-sky-500" />
                    Comunidad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Fomentamos una comunidad de amantes de las mascotas que se apoyan mutuamente.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para simplificar el cuidado de tu mascota?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Únete a la comunidad EasyPet y descubre una nueva forma de cuidar a tu compañero.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-sky-200 bg-white">
        <p className="text-xs text-gray-500">© 2024 EasyPet. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
          </a>
        </nav>
      </footer>
    </div>
  );
}
