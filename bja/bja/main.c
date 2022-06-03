//
//  main.c
//  bja
//
//  Created by 안동규 on 2021/11/13.
//  백준 문제들


    // 2588번
//    int a, b;
//    scanf("%d %d",&a, &b);
//    printf("%d\n",a*(b-100*(b/100)-10*((b-(b/100)*100)/10)));
//    printf("%d\n", a*((b-(b/100)*100)/10));
//    printf("%d\n", a*(b/100));
//    printf("%d\n", a*b);
    
    
    // 1330번
//    int a,b;
//    scanf("%d %d", &a, &b);
//    if(a>b)
//        printf(">\n");
//    else if(a<b)
//        printf("<\n");
//    else
//        printf("==\n");
    
    // 9498
//    int a;
//    scanf("%d",&a);
//
//    if(a>=90)
//        printf("A\n");
//    else if(a>=80)
//        printf("B\n");
//    else if(a>=70)
//        printf("C\n");
//    else if(a>=60)
//        printf("D\n");
//    else
//        printf("F\n");
    
    // 2753
//    int year;
//    scanf("%d", &year);
//    if(((year%4)==0 && (year%100)!=0) || ((year%4)==0 && (year%400)==0))
//        printf("1\n");
//    else
//        printf("0\n");
    
    // 14681
//    int x, y;
//    scanf("%d", &x);
//    scanf("%d", &y);
//
//    if(x>0 && y>0)
//        printf("1\n");
//    else if(x<0 && y>0)
//        printf("2\n");
//    else if(x<0 && y<0)
//        printf("3\n");
//    else
//        printf("4\n");
    
    // 2884
//    int hours, mins, temp;
//    scanf("%d %d", &hours, &mins);
//    temp = (hours*60+mins)-45;
//    if(temp<0){
//        hours = 23;
//        mins = 60-abs(temp%60);
//        printf("%d %d",hours,mins);
//    } else {
//        hours = temp/60;
//        mins = temp%60;
//        printf("%d %d",hours,mins);
//    }
    
    // 2739
//    int n;
//    scanf("%d",&n);
//    for(int i=1;i<10;i++)
//        printf("%d * %d = %d\n", n, i, n*i);
    
    // 10950
//    int i,a,b;
//    scanf("%d", &i);
//    for(int j=0;j<i;j++){
//        scanf("%d %d", &a, &b);
//        printf("%d\n",a+b);
//    }
    
    // 8393
//    int i, sum=0;
//    scanf("%d", &i);
//    for(int j=0;j<=i;j++)
//        sum +=j;
//    printf("%d",sum);
    
    // 15552
//    int i;
//    int num1, num2;
//    scanf("%d", &i);
//    for(int j=0;j<i;j++){
//        scanf("%d %d", &num1, &num2);
//        printf("%d\n", num1+num2);
//    }
    
    // 2741
//    int i;
//    scanf("%d", &i);
//    for(int j=1;j<=i;j++)
//        printf("%d\n",j);
    
    // 2742
//    int i;
//    scanf("%d", &i);
//    for(int j=i;j>0;j--)
//        printf("%d\n",j);
    
    // 11021
//    int i, count=0, num1, num2;
//    scanf("%d", &i);
//    for(int j=0;j<i;j++){
//        scanf("%d %d", &num1, &num2);
//        printf("Case #%d: %d\n",j+1,num1+num2);
//    }
    
    // 11022
//    int i, count=0, num1, num2;
//    scanf("%d", &i);
//    for(int j=0;j<i;j++){
//        scanf("%d %d", &num1, &num2);
//        printf("Case #%d: %d+%d = %d\n",j+1,num1, num2, num1+num2);
//    }
    
    // 2438
//    int length, height=0;
//    scanf("%d", &height);
//    for(int i=1;i<=height;i++){
//        for(length=0; length<i;length++)
//            printf("*");
//        printf("\n");
//    }
    
    // 2439
//    int height, i;
//    scanf("%d", &height);
//    for(i=height;i>0;i--){
//        for(int mkspace=i;mkspace>1;mkspace--){
//            printf(" ");
//        }
//        for(int star=0;star<height-(i-1);star++){
//            printf("*");
//        }
//        printf("\n");
//    }
    
    // 10871
//    int answer1=0, answer2=0 ,answer3=0;
//    printf("몇개를 입력받을까요?: ");
//    scanf("%d",&answer1);
//    getchar();
//    printf("몇 보다 크면 좋을까요?: ");
//    scanf("%d",&answer2);
//    for(;answer1>0;answer1--){
//        printf("수열 입력: ");
//        scanf("%d",&answer3);
//        getchar();
//        if(answer3<answer2){
//            printf("%d\n",answer3);
//        }
//    }
//    printf("\n");
    
    // 10952
//    int a,b,sum;
//    while(1){
//        scanf("%d",&a);
//        scanf("%d",&b);
//        if(a==0 && b==0){
//            break;
//        }
//        sum=a+b;
//        printf("%d",sum);
//        printf("\n");
//    }
//    공부가 if문의 위치를 잘못 잡아서 오답이 됐음
  
    // 10951
//    int a, b;
//    while(scanf("%d %d", &a, &b)!=EOF){
//        printf("%d\n",a+b);
//    }
//    기준이 모호해서 해답을 찾아봄.
    
    // 1110
//    int intNum, result=0, change, time=0;
//    scanf("%d",&intNum);
//    change = intNum;
//    while(1){
//        time++;
//        result = (change%10)*10 + (change/10 + change%10)%10;
//        change = result;
//        if(intNum==result)
//            break;
//    }
//    printf("%d",time);
    
    // 10818
//    int i,maxNum = 0,minNum = 0;
//    printf("배열 크기: ");
//    scanf("%d",&i);
//    int arr[i];
//    printf("배열 내용: ");
//    for(int j=0;j<i;j++){
//        scanf("%d",&arr[j]);
//    }
//    getchar();
//    printf("최소 최대: ");
//    for(int j=0;j<i;j++){
//        if(arr[j+1]>arr[j])
//            maxNum = arr[j+1];
//    }
//    for(int j=0;j<i;j++){
//        if(arr[j+1]<arr[j])
//            minNum = arr[j+1];
//    }
//    printf("%d %d\n", minNum, maxNum);
    
    // => 자꾸 틀려서 보니까 왜 풀이에서는 배열을 안쓰는거지? 괜히 삽질한듯. 배열을 안쓰고 풀어보아야겠다.
    
//    int time,num,max=-1000001,min=1000001;
//    scanf("%d", &time);
//        for(int i=0;i<time;i++){
//            scanf("%d",&num);
//            if(max<num) max=num;
//            if(min>num) min=num;
//        }
//    printf("%d %d\n", min, max);
    
    // => 최저,최댓값의 초기화가 센스있음. 뭘 적어도 저 숫자들 보다는 작고 크기 때문이지.
    // 최대, 최솟값을 저렇게 설정하고 배열을 사용하면 정답일까? 맞군! 아래도 정답이다.
    
//    int time, num, max=-1000001, min=1000001;
//        scanf("%d ", &time);
//        int arr[time];
//        for(int i=0; i<time; i++){
//            scanf("%d ", &arr[i]);
//            if(max<arr[i]) max = arr[i];
//            if(min>arr[i]) min = arr[i];
//        }
//    printf("%d %d", min, max);
    
    // 2562
//    int num=0,max=0,arr[8];
//    for(int i=0;i<9;i++){
//        scanf("%d",&arr[i]);
//        if(arr[i]>max){
//            max=arr[i];
//            num=i;
//        }
//    }
//    printf("%d\n%d\n",max,num+1);
    
    // 2577번
//    int a,b,c;
//    int result[10]={0,};
//    scanf("%d %d %d",&a,&b,&c);
//    int number=a*b*c;
//
//    int count=0;
//    while(0<number/10){
//        printf("%d - first: %d \n",number,number);
//        count=number%10;
//        result[count]++;
//        number/=10;
//        printf("%d - second: %d \n",number,number);
//    }
//
//    for(int i=0;i<10;i++){
//        printf("%d \n",result[i]);
//    }
    
    // 컨셉 방향은 잘 잡았는데, 구현하는 부분에서 실수가 있었음.
    // 특히나 while을 오랜만에 쓰다 보니까 조건문 작성에 대해서 헷갈렸음.
    // 추가적으로 result[count]++이랑 number/=10처럼 간결하게 표기하는 부분도 잘 익혀두자.
    
    // 실수 하나 더 발견! while(0<number/10)이라고 적으면 10으로 2번 나눈 결과를 평가하는 거임.
    // 그러니까 number은 10으로 나누고 나서 (number/=10) 조건문에서 number/10으로 또 나누면 또 10으로 나누게 된다.
    // 이 모든 결과가 number에 반영이 되기 때문에 그렇다.
    
    // 3052번
//    int arr[10] = {0,};
//    int result[42] = {0,};
//    for(int i=0;i<10;i++){
//        scanf("%d ", &arr[i]);
//    }
//    int temp=0;
//    for(int i=0;i<10;i++){
//        temp = arr[i]%42;
//        result[temp]++;
//    }
//
//    int count=0;
//    for(int i=0;i<42;i++){
//        if(result[i]!=0)
//            count++;
//    }
//    printf("%d \n",count);
    
    // 42로 나누면 나머지가 0~41이 될 수 있다는 걸 간과했군..ㅜ
    
    // 3052 복습
    
//    int arr[10] = {0,};
//    int answer[42] = {0,};
//    // 42로 나누니까 경우의 수는 42가지 배열에 다 들어감
//
//    for(int i=0; i<10; i++){
//        printf("%d번째 숫자를 입력하세요: ", i);
//        scanf("%d", &arr[i]);
//    }
//
//    int result;
//    for(int i=0; i<10; i++){
//        printf("%d를 42로 나눕니다.\n", arr[i]);
//        result = arr[i]%42;
//        answer[result]++;
//    }
//
//    int count = 0;
//    for(int i=0; i<42; i++){
//        if(answer[i] != 0){
//            count++;
//        }
//    }
//
//    printf("\n\n결과는 %d 입니다.\n", count);
    
    // 1546번
    
//    int subject;
//    float maxPoint = 0;
//    float avg = 0.0;
//
//    printf("몇 개의 과목이 있나요?: ");
//    scanf("%d", &subject);
//
//    float arr[subject];
//
//    for(int i=0; i<subject; i++){
//        printf("%d번째 과목 점수: ", i+1);
//        scanf("%f", &arr[i]);
//        if(maxPoint<arr[i])
//            maxPoint = arr[i];
//    }
//
//    printf("\n최고점으로 다시 점수를 계산 하겠습니다.\n\n");
//    for(int i=0; i<subject; i++){
//        arr[i] = arr[i]/maxPoint*100;
//        avg += arr[i];
//        if(i==subject-1){
//            avg = (float)avg/subject;
//        }
//    }
//
//    printf("\n\n평균: %f\n", avg);

    // 1546번 복습
    
//    int subject;
//    printf("과목 수: ");
//    scanf("%d", &subject);
//
//    float arr[subject];
//    float maxPoint = 0;
//    printf("\n세준이의 성적을 입력하세요");
//    for(int i=0; i<subject; i++){
//        printf("%d번째 과목점수: ", i+1);
//        scanf("%f", &arr[i]);
//        if(maxPoint < arr[i]){
//            maxPoint = arr[i];
//        }
//    }
//
//    float avg = 0;
//    for(int i=0; i<subject; i++){
//        arr[i] = arr[i]/maxPoint*100;
//        avg += arr[i];
//        if(i == subject-1){
//            avg = avg/subject;
//        }
//    }
//
//    printf("\n\n%f\n", avg);
    
    // 8958번
    
    // 변수설정
    /*
        1. 문제 수
        2. 문자열
    */
//    int problem;
//    char arr[80] = {0,};
//
//    // 테스트 케이스
//    printf("\n몇 문제를 내시겠습니까?: ");
//    scanf("%d", &problem);
//
//    // OX입력하기
//    for(int i=0; i<problem; i++){
//        printf("\n%d번째 답을 입력하세요!: ", i+1);
//        scanf("%s", arr);
//
//        // 채점하기(X나오면 초기화, 각 케이스마다 점수를 출력한다.)
//        int cons = 0; // 연속점수
//        int total = 0;  // 총 점수
//        int j = 0;
//        while(arr[j] != 0){
//            cons++;
//            if(arr[j] == 'X'){
//                cons = 0;
//            }
//            total += cons;
//            j++;
//        }
//
//        printf("\n\n총 점수는: %d\n", total);
//    }
    
    // 4344번
    /**
     1. 첫 줄에 테스트 케이스 개수C가 주어진다.
     2. 둘째 줄부터 각 테스트 케이스마다 학생의 수 N이 첫 수로 주어진다.
     
     1. 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여
     2. 소수점 셋째 자리까지 출력
     
     1. 평균 계산함수(평균보다 나은 학생의 퍼센트까지)
     */
    
//#include <stdio.h>
//
//int main(void) {
//    int C;
//    int N = 0;
//
//    printf("테스트 케이스의 개수를 입력해주세요: ");
//    scanf("%d", &C);
//
//    double arr[C];
//
//    for(int i=0; i<C; i++){
//        N=0;
//        printf("%d번째 케이스 학생 수: ", i+1);
//        scanf("%d", &N);
//
//        int arrPoint[N];
//        double avg = 0;
//        double result = 0;
//
//        for(int j=0; j<N; j++){
//            printf("%d 번째 성적: ", j+1);
//            scanf("%d", &arrPoint[j]);
//            avg += arrPoint[j];
//            if(j == N-1){
//                avg = (double)avg/N;
//            }
//        }
//
//        int overPoint = 0;
//        for(int j=0; j<N; j++){
//            if(arrPoint[j] > avg){
//                overPoint++;
//            }
//           result =  ((double)overPoint/N)*100;
//        }
//        arr[i] = result;
//
//        printf("\n\n%.3lf%%\n", arr[i]);
//    }
//
//    return 0;
//}

    // 4344번 오답처리 돼서 다시 풀기

//#include <stdio.h>
//
//int main(void)
//{
//    int testCase;
//    int students;
//
//    printf("testCase: ");
//    scanf("%d", &testCase);
//
//    int arrCase[testCase];
//
//    for(int i=0; i<testCase; i++){
//        printf("학생 수: ");
//        scanf("%d", &students);
//
//        float avg = 0;
//        for(int j=0; j<students; j++){
//            printf("%d번째 성적: ", j+1);
//            scanf("%d", &students);
//            float arrStudents[students];
//            avg += arrStudents[j];
//            if(j = students-1){
//                avg = avg*100/students;
//            }
//        }
//    }
//
//    return 0;
//}

    // 4344 복습
//
//void solution(int a)
//{
//    float score[a];
//    float avg=0;
//    for(int i=0; i<a; i++){
//        scanf("%f", &score[i]);
//        avg+=score[i];
//    }
//    avg = avg/a;
//    int count = 0;
//    for(int i=0;i<a;i++){
//        if(avg<score[i]) count++;
//    }
//    printf("%.3f%%\n",(float)count*100/a);
//}

    // 15596번
//long long sum(int *a, int n) {
//    long long ans = 0;
//    for(int i=0;i<n;i++) ans+=a[i];
//    return ans;
//}

#include <stdio.h>

int solution(int a)
{
    
    return 0;
}

int main(void)
{

    return 0;
}
