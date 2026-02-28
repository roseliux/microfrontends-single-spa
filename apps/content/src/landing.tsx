import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import './globals.css';

const SITE_URL = 'https://roceladurazo.mx';
const EMAIL = 'hola@roceladurazo.mx';

// Format: 52 + 10-digit number (no +, no spaces). Example: 526621234567
const WHATSAPP_NUMBER = '52XXXXXXXXXX';

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function mailtoLink(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;
}

function Landing(): React.JSX.Element {
  const onPrimaryCta = () => {
    // window.open(
    //   waLink(
    //     'Hola Rocela, quiero automatizar tareas internas en mi negocio. ¿Podemos agendar un diagnóstico gratuito?'
    //   ),
    //   '_blank',
    //   'noreferrer'
    // );
  };

  const onSecondaryCta = () => {
    const href = mailtoLink(
      'Diagnóstico de automatización con IA',
      `Hola Rocela,

Me interesa un diagnóstico para automatizar tareas internas.

Nombre:
Negocio:
Ciudad:
Procesos que quiero automatizar (ej. WhatsApp, Excel, reportes, documentos):
Volumen aproximado (mensajes/día o documentos/semana):

Gracias.`
    );
    window.location.href = href;
  };

  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Automatización con IA para Empresas en México
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Reduzco trabajo manual y mejoro procesos internos con sistemas a la medida:
                    WhatsApp, Excel, documentos y reportes. Enfoque práctico, resultados medibles.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-1"
                    type="button"
                    onClick={onPrimaryCta}
                  >
                    Diagnóstico gratis
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
                    type="button"
                    onClick={onSecondaryCta}
                  >
                    Enviarme correo
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="Automatización de procesos internos"
                  className="rounded-lg object-cover"
                  height="550"
                  src="product-dashboard-overview.png"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-20" id="features">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Qué puedo automatizar
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Soluciones enfocadas en tareas repetitivas y procesos internos que consumen tiempo y generan errores.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">WhatsApp → Seguimiento</h3>
                <p className="text-muted-foreground">
                  Clasificación de mensajes, detección de intención y creación de seguimiento automático.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Reportes automáticos</h3>
                <p className="text-muted-foreground">
                  Resúmenes diarios/semanales con métricas, pendientes y alertas sin hacerlo a mano.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">PDFs y documentos → Datos</h3>
                <p className="text-muted-foreground">
                  Extrae información de PDFs/archivos y conviértela en datos útiles (Sheets/CRM/ERP).
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Estandarización de procesos</h3>
                <p className="text-muted-foreground">
                  Flujos definidos, menos variación y menos errores para escalar sin caos operativo.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integraciones</h3>
                <p className="text-muted-foreground">
                  Conecta herramientas existentes para evitar doble captura y trabajo duplicado.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Seguridad y control</h3>
                <p className="text-muted-foreground">
                  Accesos por rol, control de datos, monitoreo y buenas prácticas para producción.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Resultados esperados
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Ejemplos de impacto típico cuando se automatiza bien (sin “magia”, con procesos claros).
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    &quot;Reducimos tiempo en seguimientos y estandarizamos respuestas. Ahora el equipo se enfoca en cerrar ventas.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Caso de uso"
                      className="rounded-full"
                      height="40"
                      src="thoughtful-artist.png"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Empresas (servicios)</p>
                      <p className="text-sm text-muted-foreground">
                        Seguimiento y clasificación en WhatsApp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    &quot;Los reportes dejaron de ser manuales. Tenemos visibilidad semanal y menos errores operativos.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Caso de uso"
                      className="rounded-full"
                      height="40"
                      src="thoughtful-artist.png"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Empresas (operación)</p>
                      <p className="text-sm text-muted-foreground">
                        Reportes automáticos + alertas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <p className="text-muted-foreground">
                    &quot;Convertimos PDFs y documentos en datos utilizables. Menos captura manual y más control.&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Caso de uso"
                      className="rounded-full"
                      height="40"
                      src="thoughtful-artist.png"
                      width="40"
                    />
                    <div>
                      <p className="font-medium">Empresas (administración)</p>
                      <p className="text-sm text-muted-foreground">
                        Documentos → Sheets/CRM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-muted py-20" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Paquetes simples
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Arranca con un diagnóstico gratuito. Definimos alcance y te doy una propuesta clara.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Basic Plan */}
              <div className="flex flex-col rounded-lg border bg-background shadow transition-all hover:shadow-lg">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      Desde
                    </span>
                    <span className="ml-1 text-xl font-semibold">MXN</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Ideal para automatizar 1 proceso clave.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>1 automatización (flujo)</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Integración básica</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Entrega + capacitación</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Soporte por correo</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button
                    className="w-full rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    type="button"
                    onClick={onPrimaryCta}
                  >
                    Solicitar diagnóstico
                  </button>
                </div>
              </div>

              {/* Pro Plan (Featured) */}
              <div className="flex flex-col rounded-lg border-2 border-primary bg-background shadow-lg transition-all hover:shadow-xl">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">Growth</h3>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Recomendado
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      2–4
                    </span>
                    <span className="ml-1 text-xl font-semibold">flujos</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Para mejorar operación completa con automatizaciones y reportes.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Automatizaciones múltiples</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Reportes automáticos</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Integraciones avanzadas</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Soporte prioritario</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Mejoras continuas opcionales</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button
                    className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    type="button"
                    onClick={onPrimaryCta}
                  >
                    Solicitar diagnóstico
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background shadow transition-all hover:shadow-lg">
                <div className="p-6">
                  <h3 className="text-2xl font-bold">Soporte mensual</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      Ajustes
                    </span>
                    <span className="ml-1 text-xl font-semibold">+ mejora</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Para mantener, optimizar y evolucionar tus automatizaciones.
                  </p>
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Optimización y ajustes</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Mejoras por prioridad</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Monitoreo y soporte</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>SLA por acuerdo</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Mejoras continuas</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="size-5 text-primary mr-2"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Escalabilidad</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <button
                    className="w-full rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    type="button"
                    onClick={onSecondaryCta}
                  >
                    Contactarme
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                ¿Quieres saber qué automatizar primero?
                <a className="font-medium text-primary hover:underline" href={SITE_URL}>
                  {' '}
                  Visita {SITE_URL}
                </a>{' '}
                o escríbeme a <a className="font-medium text-primary hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20" id="about">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre mí
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Soy Rocela Durazo. Implemento automatizaciones con IA para que tu operación sea más eficiente y escalable.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Cómo trabajo</h3>
                <p className="text-muted-foreground">
                  Primero entiendo tu proceso y detecto oportunidades reales (no “IA por moda”).
                  Después implemento una solución que se integra con tus herramientas actuales.
                </p>
                <p className="text-muted-foreground">
                  Mi enfoque es práctico: automatizaciones que reduzcan tareas repetitivas, mejoren tiempos de respuesta
                  y te den visibilidad con reportes claros.
                </p>

                <h3 className="text-2xl font-bold mt-8">Entregables</h3>
                <p className="text-muted-foreground">
                  Propuesta con alcance, implementación en producción, documentación y soporte para asegurar adopción.
                </p>

                <h3 className="text-2xl font-bold mt-8">Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Claridad:</strong> comunicación directa y entregables definidos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Resultados:</strong> foco en impacto y ROI.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Calidad:</strong> soluciones listas para producción, no solo prototipos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="size-5 text-primary mr-2 mt-0.5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    <span>
                      <strong>Confianza:</strong> protección de datos y buenas prácticas.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <img
                    alt="Automatización de procesos"
                    className="absolute inset-0 h-full w-full object-cover"
                    src="team-photo.jpg"
                  />
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Contacto</h3>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="flex flex-col items-center text-center">
                      <img
                        alt="Rocela Durazo"
                        className="size-24 rounded-full object-cover mb-4"
                        src="ceo-portrait.jpg"
                      />
                      <h4 className="text-lg font-bold">Rocela Durazo</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatización & Implementación
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <img
                        alt="Colaboradores por proyecto"
                        className="size-24 rounded-full object-cover mb-4"
                        src="cto-portrait.jpg"
                      />
                      <h4 className="text-lg font-bold">Red de especialistas</h4>
                      <p className="text-sm text-muted-foreground">
                        (según necesidad del proyecto)
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <button
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                      type="button"
                      onClick={onPrimaryCta}
                    >
                      Diagnóstico gratis
                    </button>
                    <button
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
                      type="button"
                      onClick={onSecondaryCta}
                    >
                      Escribirme por correo
                    </button>
                  </div>

                  <p className="mt-6 text-center text-sm text-muted-foreground">
                    Email: <a className="font-medium text-primary hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a> •
                    Sitio: <a className="font-medium text-primary hover:underline" href={SITE_URL}>{SITE_URL}</a>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿List@ para automatizar tu operación?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Agenda un diagnóstico gratuito y te digo qué conviene automatizar primero (con impacto real).
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90"
                  type="button"
                  onClick={onPrimaryCta}
                >
                  Pedir diagnóstico
                </button>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                  type="button"
                  onClick={onSecondaryCta}
                >
                  Contactar por correo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Landing,
  errorBoundary() {
    return <></>;
  },
});
