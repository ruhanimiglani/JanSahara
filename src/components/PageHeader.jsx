function PageHeader({ title, description }) {
  return (
    <div className="page-header">

      <div className="page-header-icon">
        🛡️
      </div>

      <p>JanSahara</p>

      <h1>{title}</h1>

      <span>{description}</span>

    </div>
  );
}

export default PageHeader;