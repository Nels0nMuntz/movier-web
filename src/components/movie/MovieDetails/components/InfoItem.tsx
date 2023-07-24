import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Typography } from "components";
import { Link } from "../styled";


interface ItemValue {
  data: string,
  link?: string,
}

interface Props {
  title: string;
  value: ItemValue | ItemValue[];
}

const InfoItem: React.FC<Props> = ({ title, value }) => {
  const isValueArray = Array.isArray(value);
  return (
    <Grid container spacing={2} mb={1} alignItems="center">
      <Grid item sm md={3}>
        <Typography element="span" type="body_1">{title}</Typography>
      </Grid>
      <Grid item sm md={9}>
        {isValueArray ? (
          <Stack direction="row" gap={0.5}>
            {value.map(({ data, link }) => {
              return link ? (
                <Link to={link} key={data + link}>
                  <Typography element="span" type="body_1" className="body-small">{data}</Typography>
                </Link>
              ) : (
                <Typography element="span" type="body_1" className="body-small">{data}</Typography>
              )
            })}
          </Stack>
        ) : (
          <>
            {value.link ? (
              <Link to={value.link}>
                <Typography element="span" type="body_1" className="body-small">{value.data}</Typography>
              </Link>
            ) : (
              <Typography element="span" type="body_1" className="body-small">{value.data}</Typography>
            )}
          </>
        )}
      </Grid>
    </Grid>
  )
}

export default InfoItem