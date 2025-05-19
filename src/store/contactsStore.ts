import { makeAutoObservable } from "mobx";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import axios from "axios";

export const contactStore = makeAutoObservable({
  all: [] as ContactDto[],
  filtered: [] as ContactDto[],
  favorites: [] as string[],
  loading: false,
  error: "",
  currentGroupId: undefined as GroupContactsDto | undefined,
  *getContacts() {
    this.loading = true;
    yield axios
      .get("http://localhost:3001/contacts")
      .then((res) => {
        this.all = res.data;
        this.filtered = res.data;
        this.loading = false;
        this.favorites = [
          this.all[0].id,
          this.all[1].id,
          this.all[2].id,
          this.all[3].id,
        ];
      })
      .catch(() => {
        this.loading = false;
        this.error = "Что то пошло не так :(";
      })
      .finally(() => {
        this.loading = false;
      });
  },
  getContactById(contactId: ContactDto["id"]) {
    return this.all.find(({ id }) => id === contactId);
  },
  filterContactByName(name: string) {
    const searchName = name.toLowerCase();
    this.filtered = this.all.filter((contact) =>
      contact.name.toLowerCase().includes(searchName)
    );
  },
  setCurrentGroupId(currentGroup: GroupContactsDto) {
    this.currentGroupId = currentGroup;
  },
  filterByCurrentGroupId() {
    this.filtered = this.filtered.filter(({ id }) => {
      return this.currentGroupId?.contactIds.includes(id);
    });
  },
  unsetCurrentGroupId() {
    this.filtered = this.all;
    this.currentGroupId = undefined;
  },
});
