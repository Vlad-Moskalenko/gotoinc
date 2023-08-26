import { TableBody } from '@mui/material';

import { ParcelState } from 'src/entities/ParcelState';
import { ParcelItem } from '..';

type ParcelsListProps = {
  list: ParcelState[];
};

export const ParcelsList = ({ list }: ParcelsListProps) => {
  return (
    <TableBody>
      {list.map((parcelData: ParcelState) => (
        <ParcelItem key={parcelData._id} data={parcelData} />
      ))}
    </TableBody>
  );
};
