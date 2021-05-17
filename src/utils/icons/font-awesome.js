import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faBars,
  faBullhorn,
  faFlask,
  faMapMarkerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false; // Tells FontAwesome to skip adding the CSS automatically.

library.add(faBars, faBullhorn, faFlask, faMapMarkerAlt, faUsers);
