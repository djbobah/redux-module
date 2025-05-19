import { observer } from "mobx-react-lite";

import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupsStore } from "src/store/groupsStore";

export const GroupListPage = observer(() => {
  return (
    <Row xxl={4}>
      {groupsStore.all.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
