import { ModalDownloadEbook } from "../../components/ModalDownloadEbook";
import ModalOffer from "../../components/ModalOffer/ModalOffer";

export default function DownloadEbook() {
    return (
        <>
        <ModalOffer isPrincipalOffer="1" onClose={() => null}/>
        <ModalDownloadEbook/>
        </>
    )
}