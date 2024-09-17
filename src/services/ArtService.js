import { Art } from "@/models/Art.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";

class ArtService {
  async getArt(pgNum) {
    let pgQuery = '';
    if(pgNum) {
      pgQuery = `?page=${pgNum}`
    }
    const response = await api.get(`api/artworks${pgQuery}`);
    const newArt = response.data.artworks.map(art => new Art(art));
    AppState.arts = newArt;
    AppState.currentPage = response.data.page;
    AppState.totalPages = response.data.pages;
    AppState.activeArt = newArt[0];
  }

  setActive(artId) {
    const newActive = AppState.arts.find(art => art.id == artId);
    AppState.activeArt = newActive;
  }
}

export const artService = new ArtService();