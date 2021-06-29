import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molcules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "issei",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@example.com",
  phone: "090-1111-1111",
  company: {
    name: "株式会社AF"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput placeholder="検索条件を入力" />
      <UserCard user={user} />
    </div>
  );
}
