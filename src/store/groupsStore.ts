import axios from "axios";
import { makeAutoObservable } from "mobx";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupsStore = makeAutoObservable({
  all: [] as GroupContactsDto[],

  *getGroups() {
    yield axios.get("http://localhost:3001/groups").then((res) => {
      this.all = res.data;
    });
  },
});
