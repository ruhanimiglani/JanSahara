function PageHeader({ title, description }) {
  return (
    <div className="page-header">


      <p>JanSahara</p>

      <h1>{title}</h1>

      <span>{description}</span>

    </div>
  );
}

export default PageHeader;