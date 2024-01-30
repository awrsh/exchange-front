import { StyledTableCell, StyledTableRow } from '../../helpers/utils/mui'
import useGetCreditCardRuels from '../../hook/query/creditcard/useGetAllCreditCard'
import Table from '../common/Table'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import DeleteCreditcard from './DeleteCreditcard';
import { useState } from 'react';
import { Card } from '../../types/Creditcard/ResponseAllCreditcard';
import EditCreditcard from './EditCreditcard';

const Banks = () => {
  const [modal, setModal] = useState<{ open: "EDIT" | "DELETE" | "", info: Card | null }>({
    open: "",
    info: null,
  })
  const { data, isLoading } = useGetCreditCardRuels()
  return (
    <div className='mt-10'>

      <Table isLoaidng={isLoading} length={data?.objects?.length} header={["نام بانک", "شماره کارت", "شماره شبا", "وضعیت", "عملیات"]}>
        {
          data?.objects?.map((card, idx: number) => (
            <StyledTableRow key={idx}>
              <StyledTableCell align='center'>
                <span>نام</span>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <span className='font-num'>{card.card_number}</span>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <span className='font-num'>{card.iban}</span>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <span>{card.approved ? <span className='text-green-500'>فعال</span> : <span className='text-red-500'>غیر فعال</span>}</span>
              </StyledTableCell>
              <StyledTableCell sx={{ display: "flex", gap: "20px", justifyContent: "center" }} align='center'>
                <RiEdit2Fill onClick={() => setModal({ open: "EDIT", info: card })} className="w-6 h-6 text-neutral-600 cursor-pointer" />
                <MdDelete onClick={() => setModal({ open: "DELETE", info: card })} className="w-6 h-6 text-neutral-600 cursor-pointer" />
              </StyledTableCell>
            </StyledTableRow>
          ))
        }
      </Table>
      {
        modal.open === "EDIT" &&
        <EditCreditcard modal={modal} setModal={setModal} />
      }

      {
        modal.open === "DELETE" &&
        <DeleteCreditcard modal={modal} setModal={setModal} />
      }
    </div>
  )
}

export default Banks