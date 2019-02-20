import QRCode from "qrcode.react";

const QRCodeItem = props => {
  const { value, size } = props;
  return <QRCode value={value} size={size} />;
};
export default QRCodeItem;
