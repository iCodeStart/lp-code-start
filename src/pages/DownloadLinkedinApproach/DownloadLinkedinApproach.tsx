import { ModalDownloadEbook } from "../../components/ModalDownloadEbook";

export default function DownloadLinkedinApproach() {
  return (
    <>
      <ModalDownloadEbook
        title="ACESSO AO MODELO DE ABORDAGEM LINKEDIN"
        subtitle="Preencha seus dados para ter acesso ao modelo"
        actionButton="Acessar Modelo"
        loadingButton="Recebendo Modelo..."
        fileName="modelo-abordagem-recrutador.pdf"
      />
    </>
  );
}
