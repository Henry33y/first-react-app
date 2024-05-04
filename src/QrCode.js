const QrCode = () => {
    const imgSrc = "images/image-qr-code.png"
    const textHead = "Improve your frontend skills by building projects"
    const textBody = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    return (
        <div className="container">
        <div className="img-container">
          <img src={imgSrc} alt="qr code" className="img" />
        </div>
        <div className="text-container">
          <h2 className="text-heading">{textHead}</h2>
          <p className="text">{textBody}</p>
        </div>
      </div>

    );
}
 
export default QrCode;