import { getCategoryStat } from "@/services/admin/admin.service";
import { CategoryStat } from "@/types/definition";
import { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { CSVLink } from "react-csv";

interface StatProps {
  id: number | null;
  category: string | null;
  count: number | null;
}
export default function Home() {
  const [stat, setStat] = useState<CategoryStat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, fetchError] = useState<any>();
  const [dataStat, setDataStat] = useState<StatProps[]>([]);

  const headers = [
    { label: "Id", key: "id" },
    { label: "category", key: "category" },
    { label: "coursecount", key: "count" },
  ];

  function fetchDataStat() {
    let statValues: StatProps[] = stat.map((s) => {
      return {
        id: s.categories!,
        category: s.title,
        count: s.count,
      };
    });

    setDataStat(statValues);
  }
  useEffect(() => {
    const fetchStat = async () => {
      const { data, error } = await getCategoryStat();
      if (error) {
        console.log(error.message);
        setStat([]);
        fetchError(error);
      } else {
        setStat(data);
        fetchError(null);
        setLoading(false);
        setDataStat(
          stat.map((s) => {
            return {
              id: s.categories,
              category: s.title,
              count: s.count,
            };
          })
        );
      }
    };
    fetchStat();
  }, [stat]);

  return (
    <Container fluid="md">
      <h1>Statistiques</h1>
      <Row>
        <CSVLink headers={headers!} data={dataStat!}>
          <Button disabled={!stat} onClick={() => fetchDataStat()}>
            Exporter les statistiques
          </Button>
        </CSVLink>
      </Row>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Décompte</th>
            </tr>
          </thead>
          <tbody>
            {stat.map((s, index) => (
              <tr key={index}>
                <td key={s.categories}>{s.title}</td>
                <td>{s.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
