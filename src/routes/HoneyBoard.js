import React, { useState, useEffect } from 'react';
import Honey_list from '../components/Honey_list';
import '../styles/HoneyBoard.css';
import DropdownBtn from '../components/Dropdown_btn';
import { useReadLocalStorage } from 'usehooks-ts';
import api from '../api'

function HoneyBoard() {
  {/*필터링에 필요한 상태들 관리 */}
  const token = useReadLocalStorage('token')
  const [creditFilter, setCreditFilter] = useState(null); // 학점 관련
  const [areaFilter, setAreaFilter] = useState(null); // 선택영역 관련
  const [chooseFilter, setChooseFilter] = useState(null); // 이수구분 관련
  const [sortBy, setSortBy] = useState(0); // 수강횟수 정렬 관련
  const [subjects, setSubjects] = useState([])

  const applyFilters = () => { //필터링 기능 함수. 카테고리 버튼을 통해 원하는 값을 선택할 때마다 if문의 조건에 따라 올바르게 필터링 될 수 있도록 설정
    let filteredData = subjects.filter(item => {
      if (creditFilter && areaFilter && chooseFilter) {
        return item.credit === creditFilter && item.choose === areaFilter && item.kind === chooseFilter;
      } else if (creditFilter && areaFilter) {
        return item.credit === creditFilter && item.choose === areaFilter;
      } else if (creditFilter && chooseFilter) {
        return item.credit === creditFilter && item.kind === chooseFilter;
      } else if (areaFilter && chooseFilter) {
        return item.choose === areaFilter && item.kind === chooseFilter;
      } else if (creditFilter) {
        return item.credit === creditFilter;
      } else if (areaFilter) {
        return item.choose === areaFilter;
      } else if (chooseFilter) {
        return item.kind === chooseFilter;
      } else {
        return true;
      }
    });

    // 정렬 기준에 따라 데이터 정렬
    if (sortBy === 1) { // 오름차순
      filteredData.sort((a, b) => a.courses - b.courses);
    } else if (sortBy === 2) { // 내림차순
      filteredData.sort((a, b) => b.courses - a.courses);
    }

    return filteredData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const [liberalArts, otherSubjects] = await Promise.all([
        api.liberalArts.find({ token }),
        api.subjects.find({ token })
      ]);

      // 두 데이터를 합치고 중복을 제거
      const combinedSubjects = [...liberalArts, ...otherSubjects];
      const uniqueSubjects = Array.from(new Set(combinedSubjects.map(item => item.id))) // id를 기준으로 중복 제거
        .map(id => {
          return combinedSubjects.find(item => item.id === id);
        });

      setSubjects(uniqueSubjects);
    };

    fetchData();
  }, [token]);

  // handleReset 함수들을 통해 각 필터 초기화 하는 기능 구현
  const handleResetCredit = () => {
    setCreditFilter(null);
  };

  const handleResetArea = () => {
    setAreaFilter(null);
  };

  const handleResetChoose = () => {
    setChooseFilter(null);
  };

  const handleResetSort = () => {
    setSortBy(0);
  };

  const filteredHoneyData = applyFilters();

  return (
    <div className='honey-main-container'> {/* 메인콘텐츠 영역 */}
        <h2 className='honey-title'>원하는 교양 찾기</h2>
        <h3 className='honey-exp'>카테고리 별로 원하는 교양을 찾아보세요!</h3>
      <div className='honey-category'> {/*카테고리 버튼용 영역 */}
        <h3 className='honey-category-text'>카테고리</h3>
        {/*드롭다운 버튼 컴포넌트들을 불러와서 각 카테고리 버튼 구현 */}
        <DropdownBtn
          drBtn_title={"학점"} // 버튼에 쓰이는 카테고리 이름
          items={['1학점', '2학점', '3학점']} // 버튼을 눌렀을 때 보이는 리스트 목록
          onSelect={(item) => setCreditFilter(Number(item[0]))} // 선택한 값을 숫자로 변환
          onReset={handleResetCredit} // 리스트의 초기화 목록을 누르면 해당 필터링 초기화
        />
        <DropdownBtn
          drBtn_title={"이수구분"}
          items={['인성교양', '기초교양', '일반교양', '자유선택', '대학기초', '전공과목', '전공필수']}
          onSelect={setChooseFilter}
          onReset={handleResetChoose} 
        />
        {/*<DropdownBtn
          drBtn_title={"수강횟수"}
          items={['적은순', '많은순']}
          onSelect={(item) => setSortBy(item === '적은순' ? 1 : item === '많은순' ? 2 : 0)} // 선택한 리스트 값이 적은순이면 1을 대입하여 오름차순, 많은순이면 2를 대입하여 내림차순
          onReset={handleResetSort}
  />*/}
      </div>
      <h2>교양 목록</h2>
      <div className='honey-list'>
        {filteredHoneyData.length > 0 ? (
            <Honey_list honey_data={filteredHoneyData} />
          ) : (
            <p>일치하는 교양이 없습니다.</p>
          )}
      </div>
    </div>
  );
}

export default HoneyBoard;