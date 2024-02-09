import { Hono } from "hono"
import { jsxRenderer } from "hono/jsx-renderer"

const app = new Hono()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

app.get(
  "/page/*",
  jsxRenderer(({ children }) => {
    return (
      <html>
        <body>
          <header>Menu</header>
          <div>{children}</div>
        </body>
      </html>
    )
  })
)

app.get("/page/about", (c) => {
  return c.render(<h1>About me!</h1>)
})

export default app
