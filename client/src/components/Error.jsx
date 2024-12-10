const Error = ({error}) => {
  return (
    <section>
        <h1>
          {error.status} {error.statusText && `- ${error.statusText}`}
        </h1>
        {error.data && <p>{error.data}</p>}
        {error.message && <p>{error.message}</p>}
    </section>
  )
}

export default Error