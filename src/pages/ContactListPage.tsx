import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { ContactDto } from "src/types/dto/ContactDto";
import { contactStore } from "src/store/contactsStore";
import { observer } from "mobx-react-lite";
import { groupsStore } from "src/store/groupsStore";

export const ContactListPage = observer(() => {
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (fv.name) {
      const fvName = fv.name?.toLowerCase() || "";
      contactStore.filterContactByName(fvName);
    } else contactStore.unsetCurrentGroupId();
    if (fv.groupId && fv.groupId !== "Open this select menu") {
      const currentGroupContacts = groupsStore.all.find(
        ({ id }) => id === fv.groupId
      );
      if (currentGroupContacts) {
        contactStore.setCurrentGroupId(currentGroupContacts);
        contactStore.filterByCurrentGroupId();
      } else {
        contactStore.unsetCurrentGroupId();
      }
    }
  };

  return (
    <>
      {!contactStore.loading ? (
        !contactStore.error ? (
          <Row xxl={1}>
            {groupsStore.all && (
              <FilterForm
                groupContactsList={groupsStore.all}
                initialValues={{}}
                onSubmit={onSubmit}
              />
            )}

            <Row
              xxs={1}
              xs={1}
              sm={1}
              md={2}
              lg={4}
              xl={4}
              xxl={4}
              className="g-4"
            >
              {contactStore.filtered.map((contact: ContactDto) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Row>
        ) : (
          `Error: ${contactStore.error}`
        )
      ) : (
        "loading"
      )}
    </>
  );
});
